React Coding Interview Questions
================================

Loop Inside React JSX
---------------------
What are 3 different ways to iterate through a list in react to display components?
```
// basically what we want to do with incorrect syntax
...
render () {
  let i = 0
  return (
    for (var item of items) {
      <Item name={item.name} key={i++} />
    }
  )
}
...
```

### Answers:
```
...
render () {
  let list = []
  for (var item of items) {
    list.push(<Item name={item.name} key={i++} />)
  }
  return (
    <div>
      {list}
    </div>
  )
}
...
```
```
...
render () {
  return (
    <div>
      {items.map((item, i) => (
        <Item name={item.name} key={i} />
      )}
    </div>
  )
}
...
```
