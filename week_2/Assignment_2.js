function calculate(args){
    let result;
    if (args.op === "+"){
    result = args.n1 + args.n2;
    } else if(args.op === "-"){
    result = args.n1 - args.n2;
    } else {
    result = "Not supported";
    }
    return result;
  }

//方法一
const args1 = {
  n1:10,
  n2:20,
  op:"+"
}
calculate(args1);//30

//方法二
class Args {
  constructor (n1,n2,op){
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
}

const args2 = new Args(20,10,"+")
calculate(args2);//30