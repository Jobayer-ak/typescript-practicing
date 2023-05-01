const person: {
  // company: 'P Hero'; // literal type...... specific value for specific property
  readonly company: string, // its not editable
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; // optional type
} = {
  company: 'P Hero',
  name: 'Montu Mia',
  age: 52,
  isMarried: true,
};

