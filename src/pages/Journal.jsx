import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Button,
  Fade,
} from '@mui/material';

function Journal() {
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [otherCategory, setOtherCategory] = React.useState('');
  const [submittedData, setSubmittedData] = React.useState(null);

  const categories = [
    { value: 'food', label: '🍔 Food' },
    { value: 'transport', label: '🚗 Transport' },
    { value: 'entertainment', label: '🎮 Entertainment' },
    { value: 'utilities', label: '💡 Utilities' },
    { value: 'other', label: '📝 Other' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCategory = category === 'other' ? otherCategory : category;

    setSubmittedData({
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
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0f7fa, #e8f5e9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 500,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          borderRadius: 4,
          px: 4,
          py: 5,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            color="black"
            gutterBottom
          >
            Spending Journal 💰
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="text.secondary"
            gutterBottom
          >
            Keep track of your expenses easily
          </Typography>

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

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: 'bold',
                backgroundColor: '#43a047',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
                borderRadius: 2,
                boxShadow: 2,
                transition: '0.3s',
              }}
            >
              ➕ Add Record
            </Button>
          </form>

          <Fade in={!!submittedData} timeout={500}>
            <Box
              sx={{
                mt: 4,
                p: 2,
                backgroundColor: '#e3f2fd',
                borderRadius: 3,
                border: '1px solid #bbdefb',
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                ✅ Record Added:
              </Typography>
              <Typography>Description: {submittedData?.description}</Typography>
              <Typography>Category: {submittedData?.category}</Typography>
            </Box>
          </Fade>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Journal;
