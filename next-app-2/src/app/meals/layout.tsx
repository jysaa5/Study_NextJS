interface props {
  children: React.ReactNode;
}

export default function MealLayout({ children }: props) {
  return (
    <>
      <p>Meal Layout</p>
      {children}
    </>
  );
}
