import { Field, SmartContract, state, State, method } from 'o1js';

// Define prime coefficients for each type
const primeLabels = {
    "MOD": 2n,    
    "TYPE": 3n,
    "ENUM": 5n,
    "STRUCT": 7n,
};
 
export class Add extends SmartContract {
  @state(Field) n_root = State<Field>();
    @method setX(x: Field)  : Promise<void>{
	this.n_root.set(x);
	 return Promise.resolve();
    }
    
    init() {
    super.init();
    this.n_root.set(Field(0));
  }

    constructor(address: any) {
      super(address);
    // Generate methods for each prime label
    Object.keys(primeLabels).forEach((label) => {
      const prime = primeLabels[label as keyof typeof primeLabels];

      // Generate add method
      const addMethod = async (f_value: Field) => {
        const currentState = this.n_root.getAndRequireEquals();
        const newState = currentState.add(f_value.mul(prime));
        this.n_root.set(newState);
      };

      // Generate is method
	const isMethod = async (): Promise<boolean> => {
            const currentState = this.n_root.getAndRequireEquals();
	    //            return currentState.div(prime).mod(prime).equals(Field(0));
	    return false
	};

      // Generate get value method
      const getValueMethod = async (): Promise<Field> => {
        const currentState = this.n_root.getAndRequireEquals();
        return currentState.div(prime);
      };

      // Add methods to the contract
	(this as any) [`add${label}`] = addMethod;
	(this as any)[`is${label}`] = isMethod;
	(this as any)[`get${label}Value`] = getValueMethod;
    });
    }


}
