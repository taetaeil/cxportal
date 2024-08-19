import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_CONTEXT_PATH as string,
  timeout: 30 * 1000,
})

// service.interceptors.request.use(
//   (config) => {
//     // request에서 meta 정의한 값이 있을 경우
//     // if (config.meta) {
//     //   // 에러 메시지를 출력하는 여부, 기본은 true
//     //   if (config.meta.useErrorMessage === false) errNotice = false
//     //   // 401 체크 여부, 기본은 true
//     //   if (config.meta.useAuth === false) useAuth = false
//     // }
//     return config
//   },
//   (error) => {
//     // 에러가 날경우 진행 부분
//     console.error(error) // for debug
//     Promise.reject(error)
//   },
// )

service.interceptors.response.use(
  (response) => {
    // console.info(
    //   `[UI Framework api response] ${response.config.url}\n %c response:`,
    //   'background-color:#58FA58; color:black',
    //   response.data,
    // )
    return response
  },
  (error) => {
    // When Prefetch Axios API in Build process, as pnpm build
    if (error.message.includes('127.0.0.1:80') || error.message.includes('::1:80') || error.message.includes('::1:3000'))
      return
    if (error.response?.status === 401) {
      const loginErrorCode = ['40000000', '40000012', '40000017']
      const errorCode = error.response.data?.code
      if (loginErrorCode.includes(errorCode)) {
        return Promise.reject(error)
      }
      // return useUserStore().tryLogout()
    }
    // console.info(
    //   ` ${error.config?.url}\n %c(error)response:`,
    //   'background-color:#FA5858; color:black',
    //   JSON.parse(JSON.stringify(error)),
    // )
    // let msg = error.message
    // error.response가 없을 경우도 존재 - Network 문제
    // if (error.response) {
    //   console.info(
    //   `[UI Framework api res] ${error.config.url}\n%c(error)response:`,
    //   'background-color:#FA5858; color:black',
    //   error.response.data,
    //   )
    //   // console.warn(error.config.url + ' (error)response:', error.response.data) // for debug
    //   if (error.response.status === 401 || error.response.status === 402) {
    //     msg = '세션이 만료되었거나, 로그인이 실패되었습니다.'
    //     const router = useRouter()
    //     router.replace({ name: 'logout' })
    //   }
    //   else if (error.response.status === 503) {
    //     msg = 'Service Unavailable'
    //   }
    //   else {
    //     msg = error.response.data
    //   }
    //   console.error('front message: ', msg)
    // // Network 관련 문제 발생 시 error.response가 없음.
    // }
    // else {
    //   console.info(
    //   `[UI Framework api res] ${error.config.url}\n%c(error)response:`,
    //   'background-color:#FA5858; color:black',
    //   JSON.parse(JSON.stringify(error)),
    //   )
    //   // console.warn(error.config.url + ' (error)response:', error) // for debug
    //   error.response = {
    //     status: 408,
    //     data: {
    //       result: {
    //         status: error.code === 'ECONNABORTED' ? '408' : error.code,
    //         desc: error.message,
    //       },
    //     },
    //   }
    // }
    return Promise.reject(error)
  },
)

export default service
