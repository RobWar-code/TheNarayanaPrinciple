const bookHandler = {
    hKeyLen: 3,
    currentIndex: 0,
    currentLevel: 1,
    currentPage: 1,
    currentHKey: "101",
    turnDone: false,

    sizeBook() {
      const wrap = document.querySelector('.wrap');
      const vw = Math.min(1200 - 45, wrap.clientWidth - 45); // clamp width
      const vh = Math.min(900 - 185, window.innerHeight - 185); // leave room for controls
      let width = vw;
      let height = vh;
      let borderWidth = width + (width * 15/1200);
      let borderHeight = height + 10;
      $('#book').width(width).height(height);
      $('#bookBorder').width(borderWidth).height(borderHeight);
      if ($('#book').data('initialized')) {
        $('#book').turn('size', width, height);
      }
    },

    pageHTML(pageData) {
      let htmlArray = [];
      let index = 0;
      let pageNum = 1;
      while (index < pageData.length) {
        let p = pageData[index];
        let hKey = p.hierarchicalKey;

        // Do html
        let html = `<div class="page">`;
        if ("art1" in p) {
          html += `<div class="artDiv"><img class="art" src="${p.art1}" aria-label="Art for paragraph" width=320 height=220><div>`;
        }
        html += `<div class="levelButtonDiv">`;
        html += `<img src="assets/images/DetailUp3.png" class="detailUpBtn" id="${"detailUpBtn" + index}"
        aria-label="Up a level" title="Up a detail level" width:"30" height:"30">`;
        html += `<img src="assets/images/DetailDown3.png" class="detailDownBtn" 
        id="${"detailDownBtn" + index}" aria-label="Down to detail" title="Down to detail" width:"30" height:"30">`;
        html += "</div>";

        if ("heading" in p) {
          html += `<div class="headingDiv"><h2>${p.heading}</h2></div>`;
        }
        else {
          html += `<div class="headingDiv"></div>`;
        }
        if ("contents" in p) {
          if (("art1" in p) && ("heading" in p)) {
            html += "<div class='paraTexts'>";
          }
          else if ("art1" in p) {
            html += "<div class='paraTextsMedium'>"
          }
          else {
            html += "<div class='paraTextsLong'>";
          }
          for (let content of p.contents) {
            html += `<p>${content}</p>`;
          }
          html += "</div>"
        }
        if ("content" in p) {
          if (("art1" in p) && ("heading" in p)) {
            html += "<div class='paraTexts'>";
          }
          else if ("art1" in p) {
            html += "<div class='paraTextsMedium'>"
          }
          else {
            html += "<div class='paraTextsLong'>";
          }
          html += `<p>${p.content}</p>`;
          html += "</div>"
        }
        if ("art2" in p) {
          html += `<img src="${p.art2}" aria-label="Emblem for book" width=320 height=240>`; 
        }
        if ("sectionEnd" in p) {
          if (p.sectionEnd) {
            html += `<p class="sectionEnd">Section End</p>`;
          }
        }
        html += "</div>";
        htmlArray.push(html);
        ++pageNum;
        ++index;
      }
      return htmlArray;
    },

    makeHierarchicalKey(lastHierarchicalKey, previousLevel, level, refNum, pageNum) {
        let key;
        if (level === 1) {
            key = "";
        }
        else if (level <= previousLevel) {
            key = lastHierarchicalKey.substring(0, this.hKeyLen * (level - 1));
        }
        else if (level === previousLevel + 1) {
            key = lastHierarchicalKey;
        }
        else {
            console.error("makeHierarchicalKey - inconsistent level in page data at (refNum, pageNum):", refNum, pageNum);
            throw "Error Exit";
        }
        let pageNumStr = "" + pageNum;
        if (pageNumStr.length < 2) pageNumStr = "0" + pageNumStr; 
        key = key + refNum + pageNumStr;
        return key;
    },

    decodeHierarchicalKey(hierarchicalKey, level) {
        let p = this.hKeyLen * (level - 1);
        let keyCode = hierarchicalKey.substring(p, p + this.hKeyLen);
        let refNum = parseInt(keyCode.substring(0, 1));
        let pageNum = parseInt(keyCode.substring(1));
        return {refNum: refNum, pageNum: pageNum};
    },

    findSection(hierarchicalKey) {
      let found = false;
      let index = 0;
      for (let page of pageTexts) {
        if (page.hierarchicalKey === hierarchicalKey) {
          found = true;
          break;
        }
        ++index;
      }
      if (found) return index;
      return null;
    },

    findSectionNum(hierarchicalKey) {
        let found = false;
        let sectionNum = 0;
        let page;
        for (page of pageTexts) {
            if (page.hierarchicalKey === hierarchicalKey) {
                found = true;
                sectionNum = page.sectionNum;
                break;
            }
        }
        if (found) {
            return sectionNum;
        }
        else {
            return 0;
        }
    },

    parsePageData() {
        let lastLevel = 1;
        let lastHierarchicalKey = "";
        let hierarchicalKey = "";
        let pageNum = 1;
        let level = 1;
        let sectionNum = 1;
        let refNum = 1;
        let lastRefNum = 1;
        let hadSectionEnd = false;
        // Parse the text and add sectioning details
        let start = true;
        let index = 0;
        for (let page of pageTexts) {
            if (!("level" in page)) level = lastLevel;
            else level = page.level;

            if (start) {
                page.sectionNum = sectionNum;
                page.refNum = refNum;
                page.pageNum = pageNum;
                hierarchicalKey = this.makeHierarchicalKey(lastHierarchicalKey, lastLevel, level, refNum, pageNum);
                start = false;
            }
            else {
                if (level === lastLevel) {
                    if (!hadSectionEnd) {
                        ++pageNum;
                        page.sectionNum = sectionNum;
                        page.refNum = lastRefNum;
                        page.pageNum = pageNum;
                        hierarchicalKey = this.makeHierarchicalKey(lastHierarchicalKey, lastLevel, level, refNum, pageNum);
                    }
                    else {
                        hadSectionEnd = false;
                        pageNum = 1;
                        ++refNum;
                        ++sectionNum;
                        page.sectionNum = sectionNum;
                        page.refNum = refNum;
                        page.pageNum = pageNum;
                        hierarchicalKey = this.makeHierarchicalKey(lastHierarchicalKey, lastLevel, level, refNum, pageNum);
                    }
                }
                else if (level > lastLevel) {
                    if (level - lastLevel > 1) {
                        console.error("parsePageData - error in level at:", page);
                        throw "Error Exit";
                    }
                    ++sectionNum;
                    refNum = 1;
                    pageNum = 1;
                    page.sectionNum = sectionNum;
                    page.refNum = refNum;
                    page.pageNum = pageNum;
                    hierarchicalKey = this.makeHierarchicalKey(lastHierarchicalKey, lastLevel, level, refNum, pageNum);
                }
                else if (level < lastLevel) {
                    let hObj = this.decodeHierarchicalKey(lastHierarchicalKey, level);
                    pageNum = ++hObj.pageNum;
                    refNum = hObj.refNum;
                    let hKey = lastHierarchicalKey.substring(0, level * this.hKeyLen);
                    sectionNum = this.findSectionNum(hKey);
                    page.sectionNum = sectionNum;
                    page.refNum = refNum;
                    page.pageNum = pageNum;
                    hierarchicalKey = this.makeHierarchicalKey(lastHierarchicalKey, lastLevel, level, refNum, pageNum);
                    hadSectionEnd = false;
                }
            }
            if ("sectionEnd" in page) {
                if (page.sectionEnd && level === lastLevel) {
                    hadSectionEnd = true;
                }
            }
            page.hierarchicalKey = hierarchicalKey;
            lastHierarchicalKey = hierarchicalKey;
            lastLevel = level;
            ++index;
        }
    },

    parseSubsections() {
      let index = 0;
      for (let page of pageTexts) {
        let detailRefs = [];
        let hKey1 = page.hierarchicalKey;
        // Search for the next level down with the same parent key
        for (let i = index + 1; i < pageTexts.length; i++) {
          let hKey2 = pageTexts[i].hierarchicalKey;
          if (hKey2.length === hKey1.length + this.hKeyLen) {
            if (hKey1 === hKey2.substring(0, hKey1.length)) {
              if (hKey2.substring(hKey2.length - 2) === "01") {
                detailRefs.push({refText: pageTexts[i].heading});
              } 
            }
            else if (hKey1 < hKey2.substring(0, hKey1.length)) {
              break;
            }
          }
          else if (hKey2.length > hKey1.length + this.hKeyLen) {
            break;
          }
        }
        if (detailRefs.length > 0) {
          page.detailRefs = detailRefs.concat();
        }
        ++index;
      }
    },

    initSections() {
        this.parsePageData();
        pageTexts.sort((a, b) => {
          if (a.hierarchicalKey.length === b.hierarchicalKey.length) {
            if (b.hierarchicalKey > a.hierarchicalKey) return -1;
            else return 1;
          }
          else if (b.hierarchicalKey.length > a.hierarchicalKey.length) {
            return -1;
          }
          else {
            return 1;
          }
        });
        this.parseSubsections();
    },

    // ---- Init turn.js ----
    initBook(pageTexts) {
      this.sizeBook();
      // populate pages
      const $book = $('#book');
      $book.html(this.pageHTML(pageTexts));

      // prefer reduced motion? shorten duration
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      $book.turn({
        gradients: true,
        acceleration: true,
        autoCenter: true,
        display: 'single', // double or single, two pages like a spread
        duration: reduce ? 150 : 700,
        elevation: 50
      });

      $book.data('initialized', true);
      this.sizeBook();

      // Basic analytics
      $book.bind('turned', (e, page, view) => {
        if (!bookHandler.turnDone) {
          ++bookHandler.currentIndex;
          ++bookHandler.currentPage;
          let page = pageTexts[bookHandler.currentIndex];
          bookHandler.currentHKey = page.hierarchicalKey;
          bookHandler.displayPageTools();
        }
        else {
          bookHandler.turnDone = false;
        }
      });

      $book.on("click", '.detailDownBtn', (e) => this.displayDetailsList());
      $book.on("click", ".detailUpBtn", (e) => this.uptoParent());

      
      // --- global handlers (namespaced, re-bound each init) ---
      $(document).on('keydown.bookNav', (e) => {
        const $b = $('#book');                     // look up current node
        if (!$b.length) return; // guard if not ready
        if (e.key === 'ArrowRight') {
          bookHandler.turnDone = false;
          var doTurn = bookHandler.turnPage('next');
          if (doTurn) {
            bookHandler.turnDone = true;
            $b.turn('next');
          }
        }
        if (e.key === 'ArrowLeft') {
          var doTurn = bookHandler.turnPage('previous');
          if (doTurn) {
            bookHandler.turnDone = true;
            $b.turn('previous');
          }
        };
      });

      $('#next').on('click.bookNav', () => {
        const $b = $('#book');
        if (!$b.length) return;
        bookHandler.turnDone = false; 
        var doTurn = bookHandler.turnPage('next');
        if (doTurn) {
          bookHandler.turnDone = true;
          $b.turn('next');
        }
      });

      $('#prev').on('click.bookNav', () => {
        const $b = $('#book');
        if (!$b.length) return;
        var doTurn = bookHandler.turnPage('prev');
        if (doTurn) {
          bookHandler.turnDone = true;
          $b.turn('previous');
        }
      });

      // Prevent end of section page turn
      $('#book').on('mousedown touchstart', '.draggable', function (e) {
        let page = pageTexts[bookHandler.currentIndex];
        if ("sectionEnd" in page) {
          e.preventDefault();              // prevent native text selection/scroll
          e.stopImmediatePropagation();    // stop Turn.js gesture handlers
          return;
        }
      });


      this.bookSet = true;
      this.displayPageTools();
    },

    turnPage(direction) {
      let doTurn = false;
      if (direction === "next") {
        let oldPage = pageTexts[this.currentIndex];
        if ("sectionEnd" in oldPage) {
          if (oldPage.sectionEnd) return false;
        }
        this.currentPage += 1; 
        this.currentIndex += 1;
        let page = pageTexts[this.currentIndex];
        if (page.hierarchicalKey.length != this.currentHKey.length) {
          this.currentPage -= 1;
          this.currentIndex -= 1;
        }
        else {
          this.currentHKey = page.hierarchicalKey;
          doTurn = true;
        }
      }
      else {
        if (this.currentPage === 1) {
          return false;
        }
        this.currentPage -= 1;
        this.currentIndex -= 1;
        let page = pageTexts[this.currentIndex];
        this.currentHKey = page.hierarchicalKey;
        doTurn = true;
      }
      this.displayPageTools();
      return doTurn;
    },

    displayPageTools() {
      let page = pageTexts[this.currentIndex];
      if ("detailRefs" in page) {
        $("#detailDownBtn" + this.currentIndex).show();
      }
      else {
        $("#detailDownBtn" + this.currentIndex).hide();
      }
      if (this.currentHKey.length > this.hKeyLen) {
        $("#detailUpBtn" + this.currentIndex).show();
      }
      else {
        $("#detailUpBtn" + this.currentIndex).hide();
      }
    },

    uptoParent() {
      let parentHKey = this.currentHKey.substring(0, this.currentHKey.length - this.hKeyLen);
      this.currentIndex = this.findSection(parentHKey);
      this.currentPage = parseInt(parentHKey.substring(parentHKey.length - 2));
      this.currentLevel -= 1;
      this.currentHKey = parentHKey;
      this.turnDone = true;
      $('#book').turn("page", this.currentPage);
      this.displayPageTools();
    },

    displayDetailsList() {
      $("#subsectionsContainer").show();
      // Get the subsections titles list from the page data
      let subsectionsList = pageTexts[this.currentIndex].detailRefs;
      // Create the list html
      let html = "<ul>";
      let counter = 1;
      for (let sectionObj of subsectionsList) {
        let title = sectionObj.refText;
        html += `<li data-ref_num="${counter}" onclick="bookHandler.displaySubsection(event)">${title}</li>`;
        ++counter;
      }
      html += "</ul>";
      $("#subsectionsListDiv").html(html);
    },

    displaySubsection(event) {
      $("#subsectionsContainer").hide();
      let refNum = event.currentTarget.dataset.ref_num;
      this.currentHKey = this.currentHKey + refNum + "01";
      this.currentIndex = this.findSection(this.currentHKey);
      this.currentPage = 1;
      this.currentLevel += 1;
      this.turnDone = true;
      // Go to the page data
      $('#book').turn("page", this.currentIndex + 1);
      this.displayPageTools();
    }

}