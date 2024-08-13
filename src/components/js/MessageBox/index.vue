<template>
  <div class="messageBox">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div class="content">
      <p @click="handleCancel">{{ cancel }}</p>
      <p @click="handleOk">{{ ok }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
};
</script>

<style scoped lang="scss">
.messageBox {
  position: absolute;
  width: 12.5rem;
  height: 6.25rem;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  box-shadow: 0.125rem 0.125rem 0.125rem 0.125rem gray;
  background: white;
  text-align: center;
  h2 {
    margin-bottom: 0.3rem;
  }
  p {
    margin-bottom: 0.3rem;
  }
  .content {
    width: 100%;
    display: flex;
    height: 2.6rem;
    border-top: 1px solid black;
    p {
      flex: 1;
      line-height: 2.6rem;
    }
    p:first-child {
      border-right: 1px solid black;
    }
  }
}
</style>