<template>
  <footer>
    <small>&copy; Created by BNK | Coding Academy, {{new Date().getFullYear()}}</small>
  </footer>
</template>

<style>
  footer {
    display: block;
    position: fixed;
    
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 40;
  }

small {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  padding-block: .4em;
  width: 100%;
}

</style>