<template>
  <v-card @click="openCourse">
    <v-img v-if="course.previewImage" height="250" :src="course.previewImage" />

    <v-card-title class="course-name pb-0 mb-4">{{ course.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="course.rating"
          color="orange"
          half-increments
          readonly
          medium
        />

        <div class="grey--text ml-4">
          {{ course.rating }} ({{ course.numberOfUsers }})
        </div>
      </v-row>

      <v-chip-group class="subjects-group" disabled>
        <v-chip v-for="subject in course.subjects" :key="subject">
          {{ subject }}
        </v-chip>
      </v-chip-group>

      <div class="course-description">
        {{ course.description }}
      </div>
    </v-card-text>

    <v-card-actions v-if="displayDeleteButton">
      <v-spacer />
      <v-btn icon @click.stop="deleteCourse">
        <v-icon color="grey lighten-1">mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      required: true
    },
    displayDeleteButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    courseId() {
      return this.course.id;
    }
  },
  methods: {
    openCourse() {
      this.$emit("open-course", this.courseId);
    },
    deleteCourse() {
      this.$emit("delete-course", this.courseId);
    }
  }
};
</script>

<style lang="scss" scoped>
.course-name,
.course-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  box-sizing: border-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.subjects-group {
  max-height: 50px;
  overflow: hidden;
}
</style>
