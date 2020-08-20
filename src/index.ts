let hello: string = 'hello world';
document.getElementsByClassName('app')[0].innerHTML = hello;
console.log(hello);

enum Role {
  Reporter = 1, // 定义值
  Developer,
  Maintainer,
  Owner,
  Guest
};
console.log(Role);

enum Answer {
  N,
  Y = 'Yes'
}
console.log(Answer);

const enum Month {
  Jan,
  Feb,
  Mar
};
let month = [Month.Jan, Month.Feb, Month.Mar];
console.log(month);

const enum ERole {
  role1 = 1,
  role2,
  role3,
  role4,
  role5
};
function initByRole(role: ERole) {
  switch (role) {
    case ERole.role1:
    case ERole.role2:
      // do sth
      console.log(111);
      break;
    case ERole.role3:
      // do sth
      console.log(222);
      break;
    case ERole.role4:
      // do sth
      console.log(333);
      break;
    case ERole.role5:
      // do sth
      console.log(444);
      break;
    default: break;
  }
}
initByRole(ERole.role3);

interface List {
  id: number,
  name: string
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
  })
}
let result = {
  data: [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ]
};
render(result);
