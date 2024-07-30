// Level 1

// 1. Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');
console.log('First Paragraph:', firstParagraph.textContent); // Output: First Paragraph

// 2. Get each paragraph using document.querySelector('#id') and by their id
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
console.log('P1:', p1.textContent); // Output: First Paragraph
console.log('P2:', p2.textContent); // Output: Second Paragraph
console.log('P3:', p3.textContent); // Output: Third Paragraph
console.log('P4:', p4.textContent); // Output: Fourth Paragraph

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const paragraphs = document.querySelectorAll('p');
console.log('All paragraphs:', paragraphs); // NodeList of all <p> elements

// 4. Loop through the nodeList and get the text content of each paragraph
paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

// 5. Set a text content to the fourth paragraph
p4.textContent = 'Updated Fourth Paragraph';

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
paragraphs.forEach((paragraph, index) => {
    paragraph.setAttribute('id', `p${index + 1}`);
    paragraph.className = `class${index + 1}`;
});

// Level 2

// 1. Change the style of each paragraph using JavaScript
paragraphs.forEach(paragraph => {
    paragraph.style.color = 'black';
    paragraph.style.backgroundColor = 'lightgray';
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = '16px';
    paragraph.style.fontFamily = 'Arial, sans-serif';
});

// 2. Select all paragraphs and apply different colors
paragraphs[0].style.color = 'green'; // First paragraph
paragraphs[1].style.color = 'red';   // Second paragraph
paragraphs[2].style.color = 'green'; // Third paragraph
paragraphs[3].style.color = 'red';   // Fourth paragraph

// 3. Set text content, id, and class to each paragraph
paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Paragraph ${index + 1}`;
    paragraph.id = `paragraph-${index + 1}`;
    paragraph.className = `para-${index + 1}`;
});
