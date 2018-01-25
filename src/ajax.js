import axios from "axios"

const $http = axios.create({
	timeout: 5000
})

$http.interceptors.response.use(function (res) {
  return res.data
})

export default $http