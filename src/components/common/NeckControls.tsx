import { useGuitarNeckContext } from "../../hooks/useGuitarNeck";

const ControlGroup = ({ children, label }) => (
  <div className="mb-4 p-3 bg-zinc-800 rounded-lg">
    <h4 className="text-sm font-medium text-zinc-400 mb-2">{label}</h4>
    {children}
  </div>
);

const Button = ({ onClick, children, active = false }) => (
  <button
    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const NeckControls = () => {
  const {
    fretboardWood,
    inlaysColor,
    nutColor,
    hasNeckBinding,
    neckBindingColor,
    handleChangeFretboardWood,
    handleChangeInlaysColor,
    handleChangeNutColor,
    handleToggleNeckBinding,
    handleChangeNeckBindingColor,
  } = useGuitarNeckContext();

  return (
    <div className="space-y-4">
      <ControlGroup label="Fretboard">
        <select
          value={fretboardWood}
          onChange={handleChangeFretboardWood}
          className="w-full bg-zinc-700 text-white border border-zinc-600 rounded p-2 text-sm"
        >
          <option value="rosewood">Rosewood</option>
          <option value="maple">Maple</option>
        </select>
      </ControlGroup>

      <ControlGroup label="Inlays">
        <div className="flex items-center gap-3">
          <label className="text-sm">Color:</label>
          <input
            type="color"
            value={inlaysColor}
            onChange={handleChangeInlaysColor}
            className="w-16 h-8 rounded cursor-pointer"
          />
        </div>
      </ControlGroup>

      <ControlGroup label="Nut">
        <select
          value={nutColor}
          onChange={handleChangeNutColor}
          className="w-full bg-zinc-700 text-white border border-zinc-600 rounded p-2 text-sm"
        >
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
      </ControlGroup>

      <ControlGroup label="Neck Binding">
        <div className="flex items-center gap-3">
          <Button onClick={handleToggleNeckBinding} active={hasNeckBinding}>
            {hasNeckBinding ? "Remove Binding" : "Add Binding"}
          </Button>
          {hasNeckBinding && (
            <input
              type="color"
              value={neckBindingColor}
              onChange={handleChangeNeckBindingColor}
              className="w-16 h-8 rounded cursor-pointer"
            />
          )}
        </div>
      </ControlGroup>
    </div>
  );
};

export default NeckControls;
