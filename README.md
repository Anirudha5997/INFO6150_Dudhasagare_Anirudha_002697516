# INFO6150_Dudhasagare_Anirudha_002697516 - Assignment_05

<h3>Developed a Minimalistic Styled Architecture Website that uses SCSS/SASS features along with Flex and Grid layout</h3>

<h2>The following SCSS/SASS features have been used:</h2>
<ul>
    <li><strong>Variables</strong> - It is used to assign a value to a variable, which can then be used insetad of passing the value itself (Create various color and font stack variables that store background colors and font family value)</li>
    <li><strong>Custom Properties</strong> - Custom Properties, also known as CSS variables, allow you to define reusable values in CSS. (Used to create csss variables)</li>
    <li><strong>Nesting</strong> - Nesting is a feature that allows you to nest selectors within one another, similar to the way you would nest elements in HTML or elements within other elements in CSS. (Used to create styles for btn, showcase-content/blogshowcase and its gallery)</li>
    <li><strong>Interpolation</strong> - A property’s name can include interpolation, which makes it possible to dynamically generate properties as needed. (Used Interpolation within for @each loop and @if and @else condition)</li>
    <li><strong>Placeholder Selectors</strong> - Placeholder selectors are used to define reusable styles that can be included in other selectors using the @extend directive. (Used to define the button styles with "%btn", it can be used throughout the app by using the @extend keyword)</li>
    <li><strong>Mixins</strong> - A mixin in SASS is a reusable group of CSS declarations that can be included in different selectors or other mixins.(Used to set background and text color across various parts)</li>
    <li><strong>Function</strong> - Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. Unlike mixins, functions return a value (Added function to set margin and padding to paragraph tags)</li>
    <li><strong>each</strong> - This rule makes it easy to emit styles or evaluate code for each element of a list or each pair in a map. (Used to add margin to the paragraph tags)</li>
    <li><strong>if and else loop</strong> - The @if rule is written @if (expression) { ... }, and it controls whether or not its block gets evaluated (including emitting any styles as CSS). (Used to set background and text color)</li>
    <li><strong>lighten and lightness</strong>In Sass, you can use the lighten function to make a color lighter by a specified percentage. The lighten function takes two arguments: the color you want to lighten and the percentage by which you want to lighten it. (Used it with combination of if and else loop to check for background color variance and set background and text color inversely) </li>
</ul>