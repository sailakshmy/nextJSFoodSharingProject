const MealDetailsPage = async ({ params }) => {
  const { mealId } = await params;
  return <h1>This is for {mealId}</h1>;
};

export default MealDetailsPage;
