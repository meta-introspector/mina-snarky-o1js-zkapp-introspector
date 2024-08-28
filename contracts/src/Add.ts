import { Field, SmartContract, state, State, method } from 'o1js';

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
export class Add extends SmartContract {

//    @state(Field) num = State<Field>();
    @state(Field) n_root = State<Field>();
//    @state(Field) n_enum = State<Field>();
//    @state(Field) n_struct = State<Field>();
//    @state(Field) n_mod = State<Field>();
    
    init() {
	super.init();
	this.n_root.set(Field(0)); // the null type, empty set
    }
    
    //  @method async update() {
    //    const currentState = this.num.getAndRequireEquals();
    //    const newState = currentState.add(2);
    //    this.num.set(newState);
    //  }
    
    // add a type encoded as a field in
    // somehow we calculate the field number or offset from the current state and the field object
    @method async addType(f_type: Field) {
	const currentState = this.n_root.getAndRequireEquals();
//	const field_number = this.get_field_number(currentState,f_type);
//	const shifted_field = this.shift_field(f_type,field_number);
	const newState = currentState.add(f_type);
	this.n_root.set(newState);
    }

    // enum
    @method async addEnum(f_enum: Field) {
	const currentState = this.n_root.getAndRequireEquals();
//	const field_number = this.get_field_number(currentState,f_type);
//	const shifted_field = this.shift_field(f_type,field_number);
	const newState = currentState.add(f_enum);
	this.n_root.set(newState);
    }
    @method async addMod(f_mod: Field) {
	const currentState = this.n_root.getAndRequireEquals();
	const newState = currentState.add(f_mod);
	this.n_root.set(newState);
    }
    @method async addStruct(f_struct: Field) {
	const currentState = this.n_root.getAndRequireEquals();
	const newState = currentState.add(f_struct);
	this.n_root.set(newState);
    }
    
}
