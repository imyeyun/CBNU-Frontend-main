//신규회원가입 페이지 컴포넌트
//호출주소 : http://localhost:3003/regist

//화면상에 데이터 관리를 위한 useState 훅 탐조하기
import { useState } from 'react';

const Regist = () => {
  //신규 회원가입 정보 상태 데이터 정의 및 값 초기화처리
  //useState(초기값설정) 함수는 [변수,변수값변경 세터함수] 배열을 반환한다.
  const [member, setMember] = useState({
    email: '',
    password: '',
    name: '',
  });

  //사용자 입력요소의 값이 변경될 때마다 데이터소스와 동기화 처리해주는 이벤트처리함수
  const memberChange = e => {
    //...member란 현재 member상수의 복사본 객체를 생성한다는 의미
    //e.target은 Change 이벤트가 발생한 UI요소를 말한다.
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  //회원가입 버튼 클릭시 신규 회원정보 백엔드 처리함수
  const registSubmit = () => {};

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Regist your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* 신규 회원가입 폼영역 */}
          <form className="space-y-6" onSubmit={registSubmit}>
            {/* 메일주소 입력요소 영역 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={member.email}
                  onChange={memberChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* 사용자 암호 입력요소 영역 */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={member.password}
                  onChange={memberChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* 사용자 이름 입력요소 영역 */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={member.name}
                  onChange={memberChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* 회원가입 버튼표시 영역 */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Regist
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Regist;
