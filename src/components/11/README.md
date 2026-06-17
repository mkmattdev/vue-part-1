# 11. Props & emits

Parent-to-child data flows down via `props`, and child-to-parent communication goes up via emitted events. Here a `BookingCard` receives a `hotel` prop and emits a `book-now` event that the parent list handles.

```vue
<script setup>
const props = defineProps({ hotel: { type: Object, required: true } })
const emit = defineEmits(['book-now'])
const handleBookNow = () => emit('book-now')
</script>
```
