export const nanoGen = (size: number): number[][] => {
  const rows: any[][] = [];
  const columns: any[][] = [];

  for (let i = 0; i < size; i++) {
    const row = [];
    const column = [];
    for (let j = 0; j < Math.floor(size / 2); j++) {
      const randomRow = {
        content: Math.round(Math.random()),
        isPressed: false,
      };
      const randomColumn = {
        content: Math.round(Math.random()),
        isPressed: false,
      };
      row.push(randomRow);
      column.push(randomColumn);
    }
    rows.push(row);
    columns.push(column);
  }

  const grid: any[][] = [];

  for (let i = 0; i < size; i++) {
    const row = new Array(size).fill({ content: 0, isPressed: false });
    grid.push(row);
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      const index = size - j - 1;
      if (rows[i][j].content === 1) {
        grid[i][index] = {
          content: 1,
          isPressed: false,
        };
      }
    }

    for (let j = 0; j < columns[i].length; j++) {
      const index = size - j - 1;
      if (columns[i][j].content === 1) {
        grid[index][i] = {
          content: 1,
          isPressed: false,
        };
      }
    }
  }

  return grid;
};

export const clueInfo = (grid: any[][]): any => {
  const rows: any[][] = [];
  const columns: any[][] = [];
  let currentIndex = 0;

  for (let x of grid) {
    let repeatCount = 0;
    let repeatCountHoriz = 0;
    const column: any[] = [];
    const row: any[] = [];
    for (let y of x) {
      if (y.content === 1) {
        repeatCount++;
      } else {
        if (repeatCount > 0) {
          row.push(repeatCount);
        }
        repeatCount = 0;
      }
    }

    for (let num = 0; num <= grid.length - 1; num++) {
      const el = grid[num][currentIndex];
      if (el.content === 1) {
        repeatCountHoriz++;
      } else {
        if (repeatCountHoriz > 0) {
          column.push(repeatCountHoriz);
        }
        repeatCountHoriz = 0;
      }
    }

    if (repeatCount > 0) {
      row.push(repeatCount);
    }
    if (repeatCountHoriz > 0) {
      column.push(repeatCountHoriz);
    }
    repeatCountHoriz = 0;
    repeatCount = 0;
    rows.push(row);
    columns.push(column);
    currentIndex++;
  }

  return { rows, columns };
};
