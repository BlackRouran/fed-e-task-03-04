<template>
  <Layout>
    <div>
      posts2
      <li v-for="post in $page.allPost.edges" :key="post.node.id">{{ post.node.title }}</li>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id,
        title,
        path
      }
    }
  }
}

</page-query>

<script>
export default {

}
</script>

<style>

</style>