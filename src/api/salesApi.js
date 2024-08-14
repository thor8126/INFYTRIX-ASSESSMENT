// This is a mock API. In a real application, you would replace these
// functions with actual API calls.

export function fetchTodaySales() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          productName: "Smartphone X",
          category: "Electronics",
          quantitySold: 25,
          salesAmount: 12500,
        },
        {
          productName: "Laptop Pro",
          category: "Electronics",
          quantitySold: 10,
          salesAmount: 15000,
        },
        {
          productName: "Wireless Earbuds",
          category: "Electronics",
          quantitySold: 50,
          salesAmount: 5000,
        },
        {
          productName: "Running Shoes",
          category: "Sports",
          quantitySold: 30,
          salesAmount: 3000,
        },
        {
          productName: "Yoga Mat",
          category: "Sports",
          quantitySold: 20,
          salesAmount: 800,
        },
        {
          productName: "Protein Powder",
          category: "Nutrition",
          quantitySold: 40,
          salesAmount: 2000,
        },
        {
          productName: "Multivitamins",
          category: "Nutrition",
          quantitySold: 60,
          salesAmount: 1800,
        },
        {
          productName: "Fiction Bestseller",
          category: "Books",
          quantitySold: 35,
          salesAmount: 700,
        },
        {
          productName: "Cookbook",
          category: "Books",
          quantitySold: 15,
          salesAmount: 450,
        },
        {
          productName: "Desk Chair",
          category: "Furniture",
          quantitySold: 8,
          salesAmount: 2400,
        },
        {
          productName: "Table Lamp",
          category: "Furniture",
          quantitySold: 18,
          salesAmount: 900,
        },
        {
          productName: "Sunscreen SPF 50",
          category: "Beauty",
          quantitySold: 45,
          salesAmount: 1350,
        },
        {
          productName: "Lipstick Set",
          category: "Beauty",
          quantitySold: 22,
          salesAmount: 660,
        },
      ]);
    }, 1000);
  });
}

export function fetchSalesComparison(date1, date2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          productName: "Smartphone X",
          category: "Electronics",
          date1Sales: 12500,
          date2Sales: 13750,
        },
        {
          productName: "Laptop Pro",
          category: "Electronics",
          date1Sales: 15000,
          date2Sales: 16500,
        },
        {
          productName: "Wireless Earbuds",
          category: "Electronics",
          date1Sales: 5000,
          date2Sales: 5500,
        },
        {
          productName: "Running Shoes",
          category: "Sports",
          date1Sales: 3000,
          date2Sales: 3300,
        },
        {
          productName: "Yoga Mat",
          category: "Sports",
          date1Sales: 800,
          date2Sales: 1000,
        },
        {
          productName: "Protein Powder",
          category: "Nutrition",
          date1Sales: 2000,
          date2Sales: 2200,
        },
        {
          productName: "Multivitamins",
          category: "Nutrition",
          date1Sales: 1800,
          date2Sales: 1700,
        },
        {
          productName: "Fiction Bestseller",
          category: "Books",
          date1Sales: 700,
          date2Sales: 770,
        },
        {
          productName: "Cookbook",
          category: "Books",
          date1Sales: 450,
          date2Sales: 405,
        },
        {
          productName: "Desk Chair",
          category: "Furniture",
          date1Sales: 2400,
          date2Sales: 2640,
        },
        {
          productName: "Table Lamp",
          category: "Furniture",
          date1Sales: 900,
          date2Sales: 990,
        },
        {
          productName: "Sunscreen SPF 50",
          category: "Beauty",
          date1Sales: 1350,
          date2Sales: 1485,
        },
        {
          productName: "Lipstick Set",
          category: "Beauty",
          date1Sales: 660,
          date2Sales: 726,
        },
      ]);
    }, 1000);
  });
}
