import { useState } from 'react';
import './PointsForm.css';

const PointsForm = () => {
    const [heading, setHeading] = useState('');
    const [points, setPoints] = useState(['']);

    const handlePointChange = (index, value) => {
        const newPoints = [...points];
        newPoints[index] = value;
        setPoints(newPoints);
    };

    const handleAddPoint = () => {
        setPoints([...points, '']);
    };

    const handleRemovePoint = (index) => {
        const newPoints = [...points];
        newPoints.splice(index, 1);
        setPoints(newPoints);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Heading:', heading);
        console.log('Points:', points);

        setHeading('');
        setPoints(['']);
    };

    return (
        <div className="points-form-container">
            <form onSubmit={handleSubmit} className="points-form">
                <h2>Enter Points</h2>
                <div className="form-control">
                    <label>Heading</label>
                    <input
                        type="text"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control points-list">
                    {points.map((point, index) => (
                        <div key={index} className="point-item">
                            <label>Points</label>
                            <input
                                type="text"
                                value={point}
                                onChange={(e) => handlePointChange(index, e.target.value)}
                                required
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    className="remove-point"
                                    onClick={() => handleRemovePoint(index)}
                                >
                                    &times;
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="add-point"
                        onClick={handleAddPoint}
                    >
                        +
                    </button>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default PointsForm;
