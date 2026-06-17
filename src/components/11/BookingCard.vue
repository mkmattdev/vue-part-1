<template>
  <div class="card">
    <h2>{{ props.hotel.name }}</h2>
    <p>Price: ${{ props.hotel.price.toFixed(2) }}</p>
    <p>Rating: {{ props.hotel.rating }}/5</p>
    <p>{{ props.hotel.description }}</p>

    <button
      class="card__book-button"
      :disabled="isBookingButtonDisabled || props.hotel.isBooked"
      @click="handleBookNow"
    >
      {{ props.hotel.isBooked ? 'Booked' : 'Book Now' }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  hotel: { type: Object, required: true },
  isBookingButtonDisabled: { type: Boolean, default: true },
})

const emit = defineEmits(['book-now'])
const handleBookNow = () => emit('book-now')
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.card__book-button {
  margin-top: 10px;
}
</style>
