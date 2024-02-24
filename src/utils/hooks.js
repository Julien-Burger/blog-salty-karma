import { useEffect } from "react";

/**
 * Hook on clicks outside of the passed ref
 * @param dependencies Use to reload the hook when value change
 */
export const useOutsideClick = (ref, callback, dependencies = []) => {
    useEffect(() => {
        /**
         * Run callback if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, ...dependencies]);
};
