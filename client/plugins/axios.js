export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
            Authorization: 'bearer ' + process.env.ACCESS_TOKEN
        }
      }
    })
  
    // Inject to context as $api
    inject('api', api)
  }