import "@styles/theme.css";

function findStartingColor(): string {
  return (
    getComputedStyle(document.documentElement).getPropertyValue('--base-color')
    || getComputedStyle(document.documentElement).getPropertyValue("color").trim()
    || "#000000"
  );
}

export default function StyleSelector() {
  return (
    <div className="style-selector">
      <input 
      type="color"
      defaultValue={findStartingColor()}
      onChange={(e) => {
        document.documentElement.style.setProperty('--base-color', e.target.value);
      }}
      />
    </div>
  );
}