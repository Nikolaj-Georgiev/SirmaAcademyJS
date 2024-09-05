export const CUTOFF_DATE = '6/26/2024';

export const TEAMS = [
  { name: 'Germany', code: 'de' },
  { name: 'Scotland', code: 'gb-sct' },
  { name: 'Hungary', code: 'hu' },
  { name: 'Switzerland', code: 'ch' },
  { name: 'Spain', code: 'es' },
  { name: 'Croatia', code: 'hr' },
  { name: 'Italy', code: 'it' },
  { name: 'Albania', code: 'al' },
  { name: 'Slovenia', code: 'si' },
  { name: 'Denmark', code: 'dk' },
  { name: 'Serbia', code: 'rs' },
  { name: 'England', code: 'gb-eng' },
  { name: 'Poland', code: 'pl' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'Austria', code: 'at' },
  { name: 'France', code: 'fr' },
  { name: 'Belgium', code: 'be' },
  { name: 'Slovakia', code: 'sk' },
  { name: 'Romania', code: 'ro' },
  { name: 'Ukraine', code: 'ua' },
  { name: 'Turkey', code: 'tr' },
  { name: 'Georgia', code: 'ge' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Czech Republic', code: 'cz' }
];

// you can always change the schemas or extract them from some API(if there is some)
// this ones looks good on the field :)
export const FIELD_SCHEMA = [
  { name: 'Germany', schema: [1, 4, 2, 3, 1] },
  { name: 'Scotland', schema: [1, 4, 2, 3, 1] },
  { name: 'Hungary', schema: [1, 4, 2, 3, 1] },
  { name: 'Switzerland', schema: [1, 4, 2, 3, 1] },
  { name: 'Spain', schema: [1, 4, 2, 3, 1] },
  { name: 'Croatia', schema: [1, 4, 2, 3, 1] },
  { name: 'Italy', schema: [1, 4, 2, 3, 1] },
  { name: 'Albania', schema: [1, 4, 2, 3, 1] },
  { name: 'Slovenia', schema: [1, 4, 2, 3, 1] },
  { name: 'Denmark', schema: [1, 4, 2, 3, 1] },
  { name: 'Serbia', schema: [1, 4, 2, 3, 1] },
  { name: 'England', schema: [1, 4, 2, 3, 1] },
  { name: 'Poland', schema: [1, 4, 2, 3, 1] },
  { name: 'Netherlands', schema: [1, 4, 2, 3, 1] },
  { name: 'Austria', schema: [1, 4, 2, 3, 1] },
  { name: 'France', schema: [1, 4, 2, 3, 1] },
  { name: 'Belgium', schema: [1, 4, 2, 3, 1] },
  { name: 'Slovakia', schema: [1, 4, 2, 3, 1] },
  { name: 'Romania', schema: [1, 4, 2, 3, 1] },
  { name: 'Ukraine', schema: [1, 4, 2, 3, 1] },
  { name: 'Turkey', schema: [1, 4, 2, 3, 1] },
  { name: 'Georgia', schema: [1, 4, 2, 3, 1] },
  { name: 'Portugal', schema: [1, 4, 2, 3, 1] },
  { name: 'Czech Republic', schema: [1, 4, 2, 3, 1] }
]

// for the app logic it is important to keep the order in the POSITIONS array!
export const POSITIONS = ['GK', 'DF', 'MF', 'FW'];

export const PHASE_NAMES = ['RoundOf16', 'Quarter Final', 'Semi Final', 'Final'];

export const COORDINATES = [[
  { x1: 100, y1: 50, x2: 150, y2: 50 },
  { x1: 150, y1: 50, x2: 150, y2: 150 },
  { x1: 150, y1: 150, x2: 100, y2: 150 },
  { x1: 150, y1: 100, x2: 200, y2: 100 },
], [
  { x1: 100, y1: 50, x2: 150, y2: 50 },
  { x1: 150, y1: 50, x2: 150, y2: 250 },
  { x1: 150, y1: 200, x2: 100, y2: 200 },
  { x1: 150, y1: 300, x2: 200, y2: 300 },
],
];

