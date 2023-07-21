cube(`transactions`, {
  sql_table: `public.transactions`,
  
  data_source: `default`,
  
  joins: {
    users: {
      sql: `${CUBE}.user_id = ${users}.id`,
      relationship: `many_to_one`
    },
    
    categories: {
      sql: `${CUBE}.category_id = ${categories}.id`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    is_income: {
      sql: `is_income`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    text: {
      sql: `text`,
      type: `string`
    },
    
    created_at: {
      sql: `created_at`,
      type: `time`
    },
    
    updated_at: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
