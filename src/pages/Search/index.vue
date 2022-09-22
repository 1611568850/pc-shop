<template>
  <div>
    <h1>PageSearch</h1>
    <h2>{{$route.params.keywords}}</h2>
    <h2>{{$route.query.keywords2}}</h2>
    <h2>{{keywords3}}</h2>
    <h2>{{keywords4}}</h2>
  </div>
  
</template>

<script type="text/ecmascript-6">
export default {
  name: 'PageSearch',
  props:['keywords3','keywords4']
}
</script >
