/*
 * @LastEditors: shinemost supertain147@163.com
 * @Date: 2023-05-07 23:23:55
 * @LastEditTime: 2023-05-08 18:46:54
 * @FilePath: \react-app\src\js\processQueue.js
 */
export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let update of queue) {
    if (typeof update === 'function') {
      // 调用更新函数
      finalState = update(finalState);
    } else {
      // 替换下一个 state
      finalState = update;
    }
  }
  return finalState;
}
