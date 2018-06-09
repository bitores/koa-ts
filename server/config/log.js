// http://www.cnblogs.com/smartsensor/p/7838169.html

export default {
　　//日志格式等设置
    appenders:
    {
        "rule-console": {"type": "console"},
        "errorLogger": {
            "type": "dateFile",
            "filename": 'server/logs/error/ ',
            "pattern": "yyyy-MM-dd-hh.log",
            "alwaysIncludePattern": true,
            "encoding":"utf-8",
            "maxLogSize": 1000,
            "numBackups": 3,
            "path":'/error'
        },
        "resLogger": {
            "type": "dateFile",
            "filename": 'server/logs/response/ ',
            "pattern": "yyyy-MM-dd-hh.log",
            "alwaysIncludePattern": true,
            "encoding":"utf-8",
            "maxLogSize": 1000,
            "numBackups": 3,
            "path":'/response'
        },
    },
 　　//供外部调用的名称和对应设置定义
    categories: {
        "default": {"appenders": ["rule-console"], "level": "all"},
        "resLogger": {"appenders": ["resLogger"], "level": "info"},
        "errorLogger": {"appenders": ["errorLogger"], "level": "error"},
        "http": {"appenders": ["resLogger"],"level": "info"}
    },
    "baseLogPath": 'server' 
}