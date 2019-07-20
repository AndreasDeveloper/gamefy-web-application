<template>
    <main class="main-content">  
        <section class="data-block-wrap">
              <h1 class="heading-1">Publish new article</h1>
              <form class="create-block" @submit.prevent="submit">
                <div class="article-field">
                    <label for="title" class="article-label">Article Title</label>
                    <input type="text" name="title" class="form__input article-input" v-model="title" required>
                </div>
                <div class="article-field">
                    <label for="content" class="article-label">Content</label>
                    <textarea name="content" cols="30" rows="10" class="form__input article-input" v-model="content" required></textarea>
                </div>
                <div class="article-field">
                    <label for="tag" class="article-label">Tags</label>
                    <input type="text" name="tag" class="form__input article-input" v-model="tags" required>
                </div>
                <div class="article-field">
                    <input type="file" accept="image/*" id="coverImage" name="coverImage" class="form__upload" @change="processFile($event)" required>
                    <label for="coverImage" class="article-label">Upload Cover Image</label>
                </div>
                <div class="article-button article-field">
                  <button type="submit" class="btn-1 btn-publish">Publish</button>
                  <h2 ref="msg">If you are ready.</h2>
                </div>
              </form>
        </section>
    </main>
</template>

<script>
// Importing Vuex
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: '',
      content: '',
      tags: '',
      coverImage: ''
    }
  },
  methods: {
    ...mapActions('articles', ['addArticle']),
    // Submit Method for Article Data
    async submit() {
      this.$refs.msg.innerHTML = 'Publishing..';
      const form = new FormData();
      form.append('title', this.title);
      form.append('content', this.content);
      form.append('tags', this.tags);
      form.append('coverImage', this.coverImage);
      form.append('createdAt', Date.now());
      const articleData = await this.addArticle(form);
      this.$refs.msg.innerHTML = 'Published';
    },
    // Getting Input File (image)
    processFile(e) {
      this.coverImage = e.target.files[0];
    }
  },
  // Head Tags
  head() {
    return {
      title: 'Gamefy - New Article',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Add new article to gamefy'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../../components/sass/main.scss';

// Create Block Wrapper
.create-block {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

// Heading 1
.heading-1 {
  text-align: left;
  font-size: 4rem;
  font-weight: 300;
  margin-left: 2rem;
}

// Article Field
.article-field {
  margin: 1rem 0;
}
// New Article Input Fields
.article-input {
  width: 100%;
  margin: 1rem 0;
}
// New Article Labels
.article-label {
  font-size: 1.6rem;
}

// Button Wrap
.article-button {
  display: flex;
  align-items: center;
  margin-top: 5rem;
  > h2 {
    font-weight: 400;
    margin-left: 1rem;
  }
}
</style>
