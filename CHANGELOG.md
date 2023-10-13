# Change Log
All notable changes to this project will be documented in this file.
 
## [1.0.0] - March 29, 2023

_First release._

****

## [1.0.1] - April 8, 2023

### Added
- Add class "multi-carousel__error" to manage Error messages.

### Changed
- Active the first item and fire its action when resizing the active click carousel.
- Active the first item and fire its action by default when initializing the active click/slide carousel.

### Fixed
 - Fix the "active-click-carousel", when the infinite is disabled, it didn't read the current slide.

****

## [1.1.0] - April 8, 2023

### Added
- Add dynamic responsive object, so the user can control the number of items depending on screen size.


****

## [2.0.0] - June 9, 2023

### Added
- Auto refresh the carousel when the data change -add/remove items-.
- When the number of items is less than the required number for the screen, and get the option of keeping the default behavior "stretch the items to fill the available space" or create extra empty items to prevent stretching.

### Changed
- Remove the auto-calculating the numbers of items depending on the parent container width, and link it only with the screen size and user inputs.
- return the button style to the default, and make the pre-style optional.

### Fixed
 - Fix the bug with the active-side-carousel with the calculating the position of first and last item in some cases.

## [3.0.0] - Oct 13, 2023

### Added
- Static data type support.

### Changed
- Properties order in the Mendix.
- The naming of the types in the widget.