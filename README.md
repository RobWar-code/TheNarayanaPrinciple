# The Narayana Principle

## Introduction

This website provides a text and pictorial narrative account of the 
notion of evolving universes in a multiverse.

## Technology and Set-up

The site uses Javascript, JQuery, turn.js, HTML and CSS technologies.
The root, src and assets folders should be mounted on the run
platform.

## Site Design

The site consists of a single main page that provides text and/or a
picture as if on a book viewing the right hand page, with a page
turning effect, provided by turn.js.

Prev and next buttons are also provided to allow page turning, as
well as the turn.js effect of dragging the page from the right.

In addition to page turning, the user can read further details
arising from a page by clicking the hand pointing down icon on the
page. This provides a list of one or more sections providing further
details of the topic. Clicking on one of these causes the first
page of this sub-section to be displayed.

A hand pointing up icon is also provided on each subsection page
which returns the display to the higher page.

In this way the site provides a hierarchical view of the narrative
content.

## Design Technology

The turn.js model provides for a book in the form of an array of
pages of html. The inclusion of levels of detail is allowed for
by treating each detail section (multi-page) as a book, re-submitting
the html for the book as each section is loaded.

The data for the book is contained in an array of objects, each
element of which provides the details for a page. These are then
processed into an array of html which is used to fill each book
section as the sections are loaded by the user.

```js
        {
            level: n, // Detail level number, begins at 1, 1 to 3
            sectionNum: n, // Auto the section number of this group of pages
            refNum: n, // 1 - 9 Auto - see notes
            pageNum: n, // Auto - 1 to 89 see notes
            hierarchicalKey: "", // Auto - see notes
            art1: "", // Optional name of upper artwork file
            heading: "", // Optional heading text
            content:, // Optional - A single paragraph for the page
            contents: ["", ..], // Optional - Multiple paragraphs for the page
            art2: "", // Optional - name of artwork file to appear beneath text
            detailRefs: [ // Auto
                {
                    refText: "", // The link reference to the section, up to 9 of these
                },
                ..
            ]
            sectionEnd: boolean, // Always present and true on the last entry for the section
        }
```

Each page object has an associated (automatically generated) string 
hierarchical key property which is used both the find and to order 
the pages of html. The length of the key is 3 x the current level
number of the section hierarchy. It is composed of
refNum (1 char) + pageNum (2 chars).., ie:

- 101 for subsection 1, page 1
- 101301 for subsection 3, page 1 of section/page 101.

Page and section numbering begins at 1. Up to 9 subsections can be added
for each page. Up to 99 pages can be added for each sub section.


