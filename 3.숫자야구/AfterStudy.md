# 2023-01-03 섹션 2. 숫자야구
* *********************************
### 1) module 시스템 (node vs ES6)
* node의 모듈시스템 (CommonJS)
  * script 가져오기
    * const React = require('react');
  * script 내보내기
    * exports.hello = 'hello';
    * module.exports = NumberBaseball;
* ES6의 모듈시스템 => babel에서 호환
  * script 가져오기
    * import 'react';
  * script 내보내기
    * export const hello = 'hello';              // => import { hello };
    * export const bye = 'bye';                  // => import { hello, bye };
    * export class/function baseball             // => import { hello, bye, baseball};

    * NumberBaseball.js 파일에서 export default {} // => import NumberBaseball; 또는 import * as baseball;

* 차이점? default가 다름

### 2) Map (반복문)
Props 쓰기
### 3) Props
Props 쓰기
### 3) Memo
*
useMemo(, [])
useCallback(, [])
useMemo > watch []
useCallback
*
useEffect > watch [a, b]
*
pureComponent
*
