import moment from 'moment'
export default [
    {
        title: "My buddy's dog saw a moose",
        comments: 100,
        submitted: moment()
    },
    {
        title: "My buddy's dog saw a cat",
        comments: 34,
        submitted: moment().subtract(1, "minute")
    },
    {
        title: "My buddy's dog saw a rat monster",
        comments: 23,
        submitted: moment().subtract(2, "seconds")
    },
    {
        title: "My buddy's dog saw a wal-mart",
        submitted: moment(),
        comments: 11
    }
]
