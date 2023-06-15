// generic model with 

interface Model<TData, TMethods>{
    data: TData;
    methods: TMethods;
}

// properties
interface IUserr {
    firstName: string;
    lastName: string;
};

// methods
interface IMethods {
    fullNamee(): string;
}

type model = Model<IUserr, IMethods>;

class Userr implements model{
    data: IUserr;
    methods: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.methods = {
            fullNamee: ()=> `${firstName} ${lastName}`
        }
    }

}

const userOne = new Userr("Jobayer", "Akanda");

console.log(userOne.methods.fullNamee());
