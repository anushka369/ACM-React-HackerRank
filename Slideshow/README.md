# React: Slideshow

You are tasked with creating a simple React application called "Basic Slideshow" that displays a series of slides and allows users to 
navigate through them. The application requirements are detailed below, and the finished application must pass all of the unit tests.

![Gif](https://hrcdn.net/s3_pub/istreet-assets/j3Q6jXZ3DOOPRlCs9hFcnQ/slideshow.gif)

## Detailed Requirements
1. The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with two properties: a string title and a string text.
2. When the application loads, the first slide must be rendered.
3. Clicking on the "Next" button shows the next slide. This button should be disabled when the current slide is the last one.
4. Clicking on the "Prev" button shows the previous slide. This button should be disabled when the current slide is the first one.
5. Clicking on the "Restart" button returns to the first slide. This button should be disabled when the current slide is the first one.
6. You can assume that the passed slides array contains at least one slide.


## Sample Interaction

### Initial State
1. The first slide is displayed.
2. The "Prev" and "Restart" buttons are disabled.

### User Action 1
1. User clicks "Next" button.
2. The next slide is displayed.
3. The "Prev" and "Restart" buttons are enabled.

### User Action 2
1. User clicks "Prev" button.
2. The previous slide is displayed.
3. The "Prev" button is disabled if the first slide is shown.
   
### User Action 3
1. User clicks "Restart" button.
2. The first slide is displayed.
3. The "Prev" and "Restart" buttons are disabled.
