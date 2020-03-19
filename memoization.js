class MyObject {
  constructor(data) {
    this.data = data;
    this.data[this.data.length - 2] = { value: 'Non-empty' };
  }

  firstNonEmptyItem() {
    return this.data.find(v => !!v.value);
  }

  firstNonEmptyItemMemo() {
    if (!this.firstNonEmpty)
      this.firstNonEmpty = this.data.find(v => !!v.value);
    return this.firstNonEmpty;
  }
}

const myObject = new MyObject(Array(2000).fill({ value: null }));

for (let i = 0; i < 100; i ++)
  console.log('myObject.firstNonEmptyItem()', myObject.firstNonEmptyItem());       // ~4000ms
for (let i = 0; i < 100; i ++)
  myObject.firstNonEmptyItemMemo();   // ~70ms
