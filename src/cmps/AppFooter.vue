<template>
  <footer>
    <small>&copy; Created by BNK | Coding Academy, {{new Date().getFullYear()}}</small>
    <p>Contact me at <a href="mailto:bnk989@gmail.com">bnk989@gmail.com</a></p>
  </footer>
</template>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 40;
    background-color: lightblue;
    small {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-block: .4em;
      width: 100%;
  }
  p{
    font-weight: 800;
  }

}

</style>