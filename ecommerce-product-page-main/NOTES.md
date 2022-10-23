# Frontend Mentor - E-commerce product page notes

## Development process

For this challenge, I want to try the mobile-first development approach.
This will allow me to get a better grasp on responsive design.
I will be using the breakpoints mentioned in the style guide.

### Container plan

The container will basically have a max-width of 720 - 980px and will center itself using margin: auto

### Header plan

Mobile header has the following:
1. A burger menu
2. The sneaker logo
3. The cart image dropdown
4. The user's avatar

Desktop header has the following:
1. Logo
2. Navbar items
    a. Collections
    b. Men
    c. Women
    d. About
    e. Contact
3. Cart image dropdown
4. User avatar

The header-container component will have the following characteristics:
1. 1 or 1.5rem of vertical padding and 1/2 or 3/4th of that amount for horizantal padding in mobile view.
2. In desktop view, it will not have any horizontal padding and the vertical padding will increase by 0.5 - 1rem
3. It should be a flex component as well.

There will be 2 immediate children of the header-container component:
1. One for the left section of the header and another for the right
2. Left section
    a. Mobile view
        i. The left section will have a gap of 1rem (or maybe 0.75rem)
        ii. The left section will have flex-grow: 1 and flex-shrink: 1 properties
    b. Desktop view
        i. The left section will have a flex gap of 2 or 2.5 times what was present for the mobile view. Probably 2rem.
        ii. The nav items will be present under a separate nav component.
        iii. The left section will have flex-grow: 1 and flex-shrink: 1 properties
3. Right section
    a. The right section will have a flex-grow: 0 property
    b. Mobile view: The flex gap will be 1 - 1.5rem
    c. Desktop view: The flex gap will be 2 - 2.5rem