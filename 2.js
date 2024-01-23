function printButterfly(rows) {
    for (let i = 1; i <= rows; i++) {
        // Left pyramid
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }

        // Spaces
        for (let k = 1; k <= 2 * (rows - i); k++) {
            process.stdout.write(" ");
        }

        // Right pyramid
        for (let l = 1; l <= i; l++) {
            process.stdout.write("*");
        }

        // Move to the next line
        console.log();
    }

    for (let i = rows; i >= 1; i--) {
        // Left pyramid
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }

        // Spaces
        for (let k = 1; k <= 2 * (rows - i); k++) {
            process.stdout.write(" ");
        }

        // Right pyramid
        for (let l = 1; l <= i; l++) {
            process.stdout.write("*");
        }

        // Move to the next line
        console.log();
    }
}

// Change the value of rows to adjust the size of the butterfly
const rows = 5;
printButterfly(rows);
