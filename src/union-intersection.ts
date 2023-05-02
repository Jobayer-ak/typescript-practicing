type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

// intersection type
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

// enum type (enum type using is not best practice. we should avoid using enum type )
enum Level {
  Junior = 'Junior',
  Mid = 'Mid',
  Senior = 'Senior',
}

//intersection type
type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: 'Junior' | 'Mid' | 'Senior';
};

// union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: 'Monjurul Islam',
  expertise: 'Javascript',
  experience: 1,
};

// intersection type
const developer: NextLevelDeveloper = {
  name: 'Next Vai',
  expertise: 'TypeScript',
  experience: 2,
  leadershipExperience: 1,
  level: 'Junior',
};
