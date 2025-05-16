import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define components
const components = [
  "button",
  "alert",
  "alert-dialog",
  "badge",
  "card",
  "input",
  "label",
  "select",
  "textarea",
  "avatar",
];

// Path to the base placeholder
const basePlaceholderPath = path.join(__dirname, '../static/images/components/component-placeholder.svg');
const baseContent = fs.readFileSync(basePlaceholderPath, 'utf8');

// Create individual placeholder files for each component
components.forEach(component => {
  const componentName = component.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  // Create a modified SVG with component-specific text
  const componentContent = baseContent.replace(
    'Component Image', 
    `${componentName} Component`
  );
  
  const outputPath = path.join(__dirname, `../static/images/components/${component}-placeholder.svg`);
  fs.writeFileSync(outputPath, componentContent);
  
  console.log(`Created placeholder for ${componentName}`);
});

console.log('All component placeholders created successfully!'); 