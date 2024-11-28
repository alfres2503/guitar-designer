import { useGuitarBodyContext } from "../../hooks/useGuitarBody";

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

const BodyControls = () => {
  const {
    color,
    burst,
    texture,
    bodyPaintOpacity,
    burstColor,
    hasPickguard,
    pickguardColor,
    hasBinding,
    bindingColor,
    handleChangeColor,
    handleChangeTexture,
    handleChangeBodyPaintOpacity,
    handleToggleBurst,
    handleChangeBurstColor,
    handleTogglePickguard,
    handleChangePickguardColor,
    handleToggleBinding,
    handleChangeBindingColor,
  } = useGuitarBodyContext();

  return (
    <div className="space-y-4">
      <ControlGroup label="Body Paint">
        <div className="flex items-center gap-3 mb-3">
          <label className="text-sm">Color:</label>
          <input
            type="color"
            value={color}
            onChange={handleChangeColor}
            className="w-16 h-8 rounded cursor-pointer"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm block">Opacity:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={bodyPaintOpacity}
            onChange={handleChangeBodyPaintOpacity}
            className="w-full accent-blue-500"
          />
        </div>
      </ControlGroup>

      <ControlGroup label="Wood Texture">
        <select
          value={texture}
          onChange={handleChangeTexture}
          className="w-full bg-zinc-700 text-white border border-zinc-600 rounded p-2 text-sm"
        >
          <option value="alder">Alder</option>
          <option value="flamedMaple">Flamed Maple</option>
        </select>
      </ControlGroup>

      <ControlGroup label="Burst Effect">
        <div className="flex items-center gap-3">
          <Button onClick={handleToggleBurst} active={burst}>
            {burst ? "Remove Burst" : "Apply Burst"}
          </Button>
          {burst && (
            <input
              type="color"
              value={burstColor}
              onChange={handleChangeBurstColor}
              className="w-16 h-8 rounded cursor-pointer"
            />
          )}
        </div>
      </ControlGroup>

      <ControlGroup label="Pickguard">
        <div className="flex items-center gap-3">
          <Button onClick={handleTogglePickguard} active={hasPickguard}>
            {hasPickguard ? "Remove Pickguard" : "Add Pickguard"}
          </Button>
          {hasPickguard && (
            <input
              type="color"
              value={pickguardColor}
              onChange={handleChangePickguardColor}
              className="w-16 h-8 rounded cursor-pointer"
            />
          )}
        </div>
      </ControlGroup>

      <ControlGroup label="Binding">
        <div className="flex items-center gap-3">
          <Button onClick={handleToggleBinding} active={hasBinding}>
            {hasBinding ? "Remove Binding" : "Add Binding"}
          </Button>
          {hasBinding && (
            <input
              type="color"
              value={bindingColor}
              onChange={handleChangeBindingColor}
              className="w-16 h-8 rounded cursor-pointer"
            />
          )}
        </div>
      </ControlGroup>
    </div>
  );
};

export default BodyControls;
