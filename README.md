# flexbox
Document describing the CSS flexbox at a high level
#CSS: Flexbox

##Overview

In the flex layout madel, the children of a flex container can be laid out in
any direction, and can "flex" their sizes, either growing to fill unused
space or shrinking to avoid overflowing the parent.  Both horizontal and vertical
alignment of the children can be easily manipulated.  Nesting of these boxes
(horizontal inside vertical, or vertical inside horizontal) can be used to build
layouts in two dimensions.

###Use-cases
- Vertically aligning elements
- Making equal height columns
- Aligning elements based on a text's baseline

##Browser compatibility
Flexbox has seen good support with most browsers, however, IE still has many bugs. Check http://caniuse.com/#search=flexbox
for updated support information.
- 93% support for prefixed
- 82% support for unprefixed


##How to use
- Syntax: old syntax vs. tweener syntax vs. new syntax
- Main axis vs. cross axis
  - If flex-direction is row, main axis is horizontal and cross axis is vertical
  - If flex-direction is column, main axis is vertical and cross axis is horizontal


- Wrap the elements you want to use flexbox on with a container such as a div or
section.
- Add a class to the container to target it with your css (ex. flex-container)

###Set the following on your container
- Use css display property
  - display: -webkit-flex;
  - display: -ms-flexbox;
  - display: flex;
- Set the flex direction (default direction is row).  Options are row,
row reverse, column, column reverse.
  - -webkit-flex-direction: row;
  -  -ms-flex-direction: row;
  - flex-direction: row;
- Set the wrap property if you don't want overflow
  - -webkit-flex-wrap: wrap;
  - -ms-flex-wrap: wrap;
  - flex-wrap: wrap;
- Flex direction and flex wrap can be shorthanded to flex-flow
  - -webkit-flex-flow: row wrap;
  - -ms-flex-flow: row wrap;
  - flex-flow: row wrap;
- To align items along the cross axis
  - -webkit-align-items: flex-start;
  - -ms-flex-align: start;
  - align-items: flex-start;

###Set the following on  your flex items
- Set the flex property
  - syntax "flex: [flex-grow] [flex-shrink] [flex-basis]"
  - -webkit-flex: 1 1 100px;
  - -ms-flex: 1 1 100px;
  - flex: 1 1 100px;

  ##Resources
  - http://flexboxfroggy.com/
  - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
