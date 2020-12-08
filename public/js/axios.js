function getData() {
    axios({
        method: 'get',
        url: 'http://localhost:7000/programmes'
    }).then(res => showData(res)).catch(err => { console.log(err) })
}

document.getElementById('get').addEventListener('click', getData)
document.getElementById('post').addEventListener('click', postData)
let error = document.getElementById('error')
// POST
function postData() {
    let userId = document.getElementById('userID').value
    let title = document.getElementById('title').value
    let content = document.getElementById('content').value

    if (!userId || !title || !content) {
        error.innerHTML = 'all fields are required'
    } else {
        axios({
            method: 'post',
            url: 'http://localhost:7000/programmes',
            data: {
                title,
                content,
                userId
            }
        }).then(res => showData(res)).catch(err => { console.log(err) })
        document.getElementById('userID').value = ''
        document.getElementById('title').value = ''
        document.getElementById('content').value = ''
    }
}

findAll()
function findAll() {
    axios({
        method: 'get',
        url: 'http://localhost:7000/programmes/all'
    })
        .then(res => dataDisplayed(res))
        .catch(err => console.error(err))
}

function showData(res) {
    document.getElementById('results').innerHTML = `
        <div class="card card-body my-3">
            <h2>Status ${JSON.stringify(res.status)}</h2>
        </div>
        <div class="card card-body my-3">
            <pre><small>Status ${JSON.stringify(res.data, null, 2)}</small></pre>
        </div>
        <div class="card card-body my-3">
            <h3>config</h3>
            <pre><small>Status ${JSON.stringify(res.config, null, 2)}</small></pre>
        </div>
    `
}
function dataDisplayed(res) {
    document.getElementById('result-all').innerHTML = `
    <div class="card">
        <div class="card-header">
            <h3>Programmes</h3>
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
    </div>
    `
}