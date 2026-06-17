<template>
  <div class="booking-list">
    <h1>Hotel Offers</h1>

    <div class="booking-list__form">
      <input
        :value="firstName"
        placeholder="First Name"
        @input="(e) => (firstName = e.target.value)"
      />
      <input
        :value="lastName"
        placeholder="Last Name"
        @input="(e) => (lastName = e.target.value)"
      />
    </div>

    <p>Booking count: {{ bookingCount }}</p>

    <div class="booking-list__cards">
      <BookingCard
        v-for="hotel in hotels"
        :key="hotel.id"
        :hotel
        :is-booking-button-disabled
        @book-now="handleBooking(hotel)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import BookingCard from './BookingCard.vue'

const hotels = ref([
  {
    id: 1,
    name: 'Grand Plaza Hotel',
    price: 150,
    rating: 4.5,
    description: 'Elegant hotel in the city center.',
    isBooked: false,
  },
  {
    id: 2,
    name: 'Cozy Inn',
    price: 80,
    rating: 4.0,
    description: 'Comfortable rooms with homely atmosphere.',
    isBooked: false,
  },
  {
    id: 3,
    name: 'Luxury Suites',
    price: 250,
    rating: 5.0,
    description: 'Luxurious accommodations.',
    isBooked: false,
  },
  {
    id: 4,
    name: 'Budget Stay',
    price: 50,
    rating: 3.5,
    description: 'Affordable short stays.',
    isBooked: false,
  },
])

const firstName = ref('')
const lastName = ref('')
const bookingCount = ref(0)

const handleBooking = (hotel) => {
  hotel.isBooked = true
  bookingCount.value++
  alert(
    `Dear ${firstName.value} ${lastName.value}, you have booked ${hotel.name} for $${hotel.price}/night.`,
  )
}

const isBookingButtonDisabled = computed(() => !firstName.value || !lastName.value)
</script>

<style scoped>
.booking-list__form {
  margin: 16px 0;
}
</style>
