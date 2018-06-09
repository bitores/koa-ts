export default {
  // whether parse the body, default true
  body_parse: true,
  // reserve the query string after path, default true.
  keep_query_string: true,
  // HTTP request timeout milliseconds, default 3000
  proxy_timeout: 3000,
  // which method should proxy, default ['GET', 'POST', 'PUT', 'DELETE']
  proxy_methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // array consist of proxy rule, default []
	proxy_rules: [
    {
      proxy_location: /^\/proxy\//,
      proxy_pass: 'http://www.baidu.com',
      proxy_micro_service: false,
      proxy_merge_mode: false
    }
  ]
}