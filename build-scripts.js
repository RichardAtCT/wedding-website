import { minify } from 'terser';
import fs from 'fs/promises';
import path from 'path';

async function minifyJavaScript() {
  try {
    console.log('Minifying JavaScript...');

    // Read the source file
    const sourceFile = path.join(process.cwd(), 'js', 'scripts.js');
    const code = await fs.readFile(sourceFile, 'utf8');

    // Minify the code
    const result = await minify(code, {
      compress: {
        drop_console: false, // Keep console for wedding site
      },
      mangle: true,
      output: {
        comments: false,
      },
    });

    // Write the minified file
    const outputFile = path.join(process.cwd(), 'js', 'scripts.min.js');
    await fs.writeFile(outputFile, result.code, 'utf8');

    console.log('✓ JavaScript minified successfully');
  } catch (error) {
    console.error('Error minifying JavaScript:', error);
    process.exit(1);
  }
}

minifyJavaScript();
