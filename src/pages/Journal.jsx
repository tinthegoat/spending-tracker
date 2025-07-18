import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Journal() {
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [otherCategory, setOtherCategory] = React.useState(''); 

  const categories = [
    { value: 'food', label: 'Food' },
    { value: 'transport', label: 'Transport' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'utilities', label: 'Utilities' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCategory = category === 'other' ? otherCategory : category;

    console.log('Submitted:', {
      description,
      category: finalCategory,
    });

    setDescription('');
    setCategory('');
    setOtherCategory('');
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <h2>Spending Journal</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <TextField
          select
          label="Category"
          variant="outlined"
          fullWidth
          margin="normal"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {category === 'other' && (
          <TextField
            label="Specify Other Category"
            variant="outlined"
            fullWidth
            margin="normal"
            value={otherCategory}
            onChange={(e) => setOtherCategory(e.target.value)}
            required
          />
        )}

        {description && category && (
          <Box sx={{ mt: 2, p: 2, bgcolor: '#e0f7fa', borderRadius: 1 }}>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Category:</strong> {category === 'other' ? otherCategory : category}</p>
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              borderRadius: 4,
              border: 'none',
              background: '#28a745',
              color: '#fff',
              fontWeight: 500,
            }}
          >
            Add Record
          </button>
        </Box>
      </form>
    </Box>
  );
}

export default Journal;
